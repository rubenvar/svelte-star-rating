<script>
  import isNumber from './isNumber';
  import makeUniqueId from './makeUniqueId';
  import Star from './components/Star.svelte';

  export let id = makeUniqueId();
  export let rating;
  export let style = '';
  export let config = {};
  // check if rating prop is number and between 0 and 5
  $: if (!isNumber(rating) || rating < 0 || rating > 5) {
    throw new Error('rating value is not valid! 🙅‍♀️');
  }

  // number of full, 'half' and empty stars
  $: full = Math.floor(rating);
  $: half = Math.round((rating - full) * 100) / 100;
  $: empty = Math.floor(5 - rating);
  // partial arrays
  $: fullArr = Array(full).fill(1);
  $: halfArr = half !== 0 ? [half] : [];
  $: emptyArr = Array(empty).fill(0);
  // array of star-to-be numbers
  $: stars = fullArr.concat(halfArr).concat(emptyArr);
  // do all this array thing a little more efficiently, maybe?

  // font size of rating text will be half of the star size, with a min value of 16px
  let fontSize = config.size && isNumber(config.size) ? config.size : 20;
  fontSize = fontSize / 2 < 16 ? 16 : fontSize / 2;
</script>

<div {style}>
  {#each stars as star}
    <Star {id} full={star} {config} />
  {/each}
  {#if config.showText}<span style="font-size:{fontSize}px">{rating}</span>{/if}
</div>

<style>
  div {
    display: flex;
    margin-bottom: 14px;
  }
  span {
    color: #7f7f7f;
    line-height: 1;
    align-self: center;
    margin-left: 8px;
  }
</style>
