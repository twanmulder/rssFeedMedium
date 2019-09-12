window.onload = function() {
	var i;
	var rss = document.querySelector(".rss");
	var feedItems = document.querySelectorAll(".feed-item-title");

	for (i = 0; i < feedItems.length; i++) {
		// If feed item is a comment, delete it
		let feedItemAnchor = feedItems[i].getElementsByTagName("a")[0];
		if (feedItemAnchor.href.includes("@toktoktwan")) {
			feedItems[i].remove();
		} else if (
			feedItems[i].nextSibling.className === "feed-item-title" ||
			feedItems[i].nextSibling.length == 4
		) {
			feedItems[i].remove();
		}
	}

	var mediumItems = document.querySelectorAll(".medium-feed-item");
	for (i = 0; i < mediumItems.length; i++) {
		let line = document.createElement("hr");
		mediumItems[i].parentNode.insertBefore(line, mediumItems[i].nextSibling);
	}

	var tl = new TimelineMax();
	var hr = document.querySelectorAll("hr");
	var feedTitle = document.querySelector(".feed-title");
	feedItems = document.querySelectorAll(".feed-item-title, .medium-feed-item");

	tl.from(feedTitle, 0.3, { opacity: 0, x: 20 }, "+=.5");
	tl.staggerFrom(
		feedItems,
		0.8,
		{ y: 10, opacity: 0, ease: Power1.easeOut },
		0.1,
		"-=0.1"
	);
	tl.from(hr, 0.7, { opacity: 0 }, "-=.3");
};
