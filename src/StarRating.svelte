<script>
  import isNumber from './utils/isNumber';
  import Star from './Star.svelte';
  export let id = '000';
  export let rating;
  export let style = '';
  // TODO check if rating prop is number and between 0 and 5
  // if (!isNumber(rating) || rating < 0 || rating > 5) throw new Error('mal');
  export let config = {};
  // number of full, 'half' and empty stars
  const full = Math.floor(rating);
  const half = Math.round((rating - full) * 100) / 100;
  const empty = Math.floor(5 - rating);
  // partial arrays
  const fullArr = Array(full).fill(1);
  const halfArr = half !== 0 ? [half] : [];
  const emptyArr = Array(empty).fill(0);
  // array of star-to-be numbers
  const stars = fullArr.concat(halfArr).concat(emptyArr);
  // font size of rating text will be half of the star size, with a min value of 16px
  let fontSize = config.size && isNumber(config.size) ? config.size : 20;
  fontSize = fontSize / 2 < 16 ? 16 : fontSize / 2;
  // TODO do all this array thing a litter more efficiently
</script>

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

<div {style}>
  {#each stars as star}
    <Star {id} full={star} {config} />
  {/each}
  {#if config.showText}
    <span style="font-size:{fontSize}px">{rating}</span>
  {/if}
</div>
