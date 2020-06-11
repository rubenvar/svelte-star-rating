<script>
  import isNumber from './utils/isNumber';
  import Star from './Star.svelte';
  export let id = '000';
  export let rating;
  // TODO check if rating prop is number and between 0 and 5
  // if (!isNumber(rating) || rating < 0 || rating > 5) throw new Error('mal');
  export let config;
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
  }
</style>

<div>
  {#each stars as star}
    <Star {id} full={star} {config} />
  {/each}
  {#if config.showText}
    <span>{rating}</span>
  {/if}
</div>
