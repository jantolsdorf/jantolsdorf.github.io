const animationConfig = {
	defaultDuration: 400,
	element: document.createElement("DIV"),
	identity: () => {},
};

const tasks = new WeakMap();

class AnimationQueue {
	static get tasks() {
		return tasks;
	}

	static enqueue(element, task) {
		if (!tasks.has(element)) {
			tasks.set(element, []);
		}

		tasks.get(element).push(task);
	}

	static run(element, task) {
		if (!tasks.has(element)) {
			tasks.set(element, []);
		}

		return task().then(() => {
			const elementTasks = tasks.get(element);

			if (elementTasks.length > 0) {
				return AnimationQueue.run(element, elementTasks.shift());
			}
			tasks.delete(element);
		});
	}

	static push(element, task) {
		const elementTasks = tasks.get(element);

		if (elementTasks) {
			AnimationQueue.enqueue(element, task);
		} else {
			AnimationQueue.run(element, task);
		}
	}
}

const animate = ({
	beforeStart = animationConfig.identity,
	duration = animationConfig.defaultDuration,
	element = animationConfig.element,
	progress: progressCallback = animationConfig.identity,
}) => {
	let start = null;
	let stopped = false;
	let animationFrame;
	let stop;
	let animate;

	const promise = new Promise((resolve, reject) => {
		animate = timestamp => {
			start = start || timestamp;

			const timeElapsed = timestamp - start;
			const remaining = duration - timeElapsed;

			if (timeElapsed <= duration) {
				const progress = 1 - remaining / duration; // easing formula (currently linear)
				progressCallback(progress);
				animationFrame = !stopped && requestAnimationFrame(animate);
			} else {
				progressCallback(1);
				resolve();
			}
		};

		stop = () => {
			stopped = true;
			cancelAnimationFrame(animationFrame);
			reject(new Error("animation stopped"));
		};
	}).catch(oReason => oReason);

	AnimationQueue.push(element, () => {
		beforeStart();
		requestAnimationFrame(animate);

		return new Promise(resolve => {
			promise.then(() => resolve());
		});
	});

	return {
		promise: () => promise,
		stop: () => stop,
	};
};

export { animationConfig as a, animate as b };
