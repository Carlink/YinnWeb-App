<template>
	<v-container fill-height id="body">
        <v-layout row wrap align-center>
          <v-flex class="text-xs-center">
           <img src="/img/Yinn.svg" id="logo" class="elem">
          </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
	export default {
		layout: 'yinn',
		components: {
		},
		mounted(){
			
		//Splash Screen Delay
		setTimeout(function() {
	        window.location.replace("/dashboard");
	    }, 4000);
		}
	};
</script>

<style scoped>

	#body{
		background-image: radial-gradient(100% 100%, #373737 80%, #000000 100%);
	}

	#logo{
		width: 70%;
	}

	.elem{
	  animation: animationFrames ease 2s;
	  animation-iteration-count: infinite;
	  transform-origin: 50% 50%;
	  -webkit-animation: animationFrames ease 2s;
	  -webkit-animation-iteration-count: infinite;
	  -webkit-transform-origin: 50% 50%;
	  -moz-animation: animationFrames ease 2s;
	  -moz-animation-iteration-count: infinite;
	  -moz-transform-origin: 50% 50%;
	  -o-animation: animationFrames ease 2s;
	  -o-animation-iteration-count: infinite;
	  -o-transform-origin: 50% 50%;
	  -ms-animation: animationFrames ease 2s;
	  -ms-animation-iteration-count: infinite;
	  -ms-transform-origin: 50% 50%;
	  animation-direction:alternate; 
	}

	@keyframes animationFrames{
	  0% {
	    transform:  scaleX(1.00) scaleY(1.00) ;
	  }
	  100% {
	    transform:  scaleX(1.20) scaleY(1.20) ;
	  }
	}

	@-moz-keyframes animationFrames{
	  0% {
	    -moz-transform:  scaleX(1.00) scaleY(1.00) ;
	  }
	  100% {
	    -moz-transform:  scaleX(1.20) scaleY(1.20) ;
	  }
	}

	@-webkit-keyframes animationFrames {
	  0% {
	    -webkit-transform:  scaleX(1.00) scaleY(1.00) ;
	  }
	  100% {
	    -webkit-transform:  scaleX(1.20) scaleY(1.20) ;
	  }
	}

	@-o-keyframes animationFrames {
	  0% {
	    -o-transform:  scaleX(1.00) scaleY(1.00) ;
	  }
	  100% {
	    -o-transform:  scaleX(1.20) scaleY(1.20) ;
	  }
	}

	@-ms-keyframes animationFrames {
	  0% {
	    -ms-transform:  scaleX(1.00) scaleY(1.00) ;
	  }
	  100% {
	    -ms-transform:  scaleX(1.20) scaleY(1.20) ;
	  }
	}

</style>