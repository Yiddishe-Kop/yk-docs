---
title: Vue - Sorting arrays by multiple params
excerpt: Filtering arrays by multiple params in Vue.
tag: Article
date: 2019-05-21
---

I'm working on this page where the user can search for videos from multiple sources. It looks something like this:

![Taggr interface](/content/img/taggr.jpeg)

In the `data` we have an array of all the videos, and a `sortBy` field:

```js
data() {
  return {
    searchQuery: "",
    videos: [],
    sortBy: "",
  };
}
```

When the user searches for something, the videos array gets populated with video data from an API, which returns an array of video objects like so:

```json
{
   "source": 1,
   "id": "ImtZ5yENzgE",
   "channelName": "freeCodeCamp.org",
   "title": "Laravel PHP Framework Tutorial - Full Course for Beginners (2019)",
   "desc": "Learn Laravel 5.8 by creating an...",
   "imgURL": "https://i.ytimg.com/vi/ImtZ5yENzgE/mqdefault.jpg",
   "likeCount": "11688",
   "duration": "04:25:05",
   "rawViewCount": 745908,
   "rawDate": "05/07/2019 12:39:04"
},
```
Once we have the array of videos, we can show them to the user by looping over the videos array in the template (here I'm using a `video-card` component that renders each video):
```html
<section v-if="videos.length">
    <video-card-import
      v-for="video in videos"
      :video="video"
      :key="video.id"
    />
</section>
```
Now let's see how we can let the user sort the results by a few parameters: views, likes, and date published, like so:

![Sort options](/content/img/taggr-sort.png)

It's quite easy to implement with Vue 😀.

First let's create the dropdown for the user to choose the sorting method:

```html
<div>
  Sort by:
  <select
    name="sort"
    v-model="sortBy"
  >
    <option value="">Default</option>
    <option value="rawViewCount">Views</option>
    <option value="likeCount">Likes</option>
    <option value="rawDate">Newest</option>
  </select>
</div>
```

We bind it to the `sortBy` property with `v-model`, so when the user selects an option, the sortBy property will be the value of the selected option. Here is the trick - we give each option a `value` that is the property name of the video object we want to sort on.

Now in order to actually sort the videos base on the users selection, we need to create a new list of videos, that is computed based on the sorting method the user has selected. In Vue it can be done easily with a [computed property](https://vuejs.org/v2/guide/computed.html):

```js
computed: {
  videosSorted() {
    // if default sorting selected - return everything as is
    if (!this.sortBy) return this.videos;
    // sorting
    return this.videos.sort((a, b) => b[this.sortBy] - a[this.sortBy]);
  },
},
```

So this one sort function is going to sort the videos by any parameter the user selects 🎉 (then we just loop over this in the template). I think this is a very nice way of doing it...

Just in case you didn't grasp how it works: `videosSorted` returns the videos array sorted by the value of `sortBy`, which is going to be the name of the property of the video the user wants to sort.

Instead of writing 3 separate sort methods, write one. The trick is to use the exact property name as the value of the dropdown `option`s.
