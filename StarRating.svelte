<script>
  import Star from "./Star.svelte";
  export let id;
  export let rating;
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
  // TODO do all this array thing more efficiently
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
