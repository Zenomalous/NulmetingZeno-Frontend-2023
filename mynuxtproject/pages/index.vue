<template>
  <div>
    <h1>Index</h1>
    <p>Paragraph of text on the index page.</p>
	<p> <nuxt-link to="/mypage">Go to My Page</nuxt-link> </p>
	<p> <nuxt-link to="/count">Go to Count</nuxt-link> </p>
    <p><nuxt-link to="/message/add">Go to Add Message</nuxt-link></p>
    <p><nuxt-link to="/message/read">Go to Read Messages</nuxt-link></p>
	<p> <nuxt-link to="/testapipage">Go to Test API Page</nuxt-link> </p>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
};
</script>
