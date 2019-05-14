<script lang="ts">

  import {Component, Vue} from 'vue-property-decorator'

  @Component
  class MainTrackingCode extends Vue {
  }

  export default MainTrackingCode;
</script>

<template lang="md">
  Follows these steps:

  1. Copy the following javascript code (click the "copy to clipboard" button)
  2. Paste it into all webpages in front of the `</body>` tag.
  3. Open any public webpage on your site in the browser, or restore it if it's open.
  4. Return to Colpirio and refresh this page. Successful deployment of the javascript code to your site and its launch is indicated on this page.

  ```html
  <script type="text/javascript">
  var Colpirio = Colpirio || [];
  (function() {
  var d=document, trg=d.createElement('script'); trg.type='text/javascript'; trg.async=true; trg.defer=true;
  trg.src='https://cdn.colpirio.com/tracker.js';
  var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(trg, s);
  })();
  Colpirio.push(['siteId', '<SITE_ID>']);
  Colpirio.push(['siteOrigin', '<SITE_ORIGIN>']);
  </script>
  ```
  > You can also use the Google Tag Manager or other similar tool to deploy the tracking code.

  By entering this javascript code into your site, you prove that you are its real owner. Since then, no one else will
  be able to create another Colpirio account with the same URL.
</template>