<script lang="ts">
  import {
    daysStore,
    hoursStore,
    minutesStore,
    secondsStore,
  } from "./store/countdown";

  //create a new date object and make a countdown
  //to the date that we want

  //set interval to update the countdown every second
  setInterval(() => {
    //get today's date and time
    const now = new Date().getTime();
    console.log(now);

    //find the distance between now and the countdown date
    const distance = countDownDate - now;
    console.log(distance);

    //calculate days, hours, minutes, seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    console.log(days);
    daysStore.set(days);

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    console.log(hours);
    hoursStore.set(hours);

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    console.log(minutes);
    minutesStore.set(minutes);

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(seconds);
    secondsStore.set(seconds);
  }, 1000);



  // get the current date plus 2 months 4 days 6 hours 8 minutes 10 seconds
  const now = new Date();
  const future = new Date(
    now.getFullYear(),
    now.getMonth() + 2,
    now.getDate() + 4,
    now.getHours() + 6,
    now.getMinutes() + 8,
    now.getSeconds() + 10
  );


  //set the date we're counting down to from future
  const countDownDate = new Date(
    `${future.getMonth()} ${future.getDate()}, ${future.getFullYear()} ${future.getHours()}:${future.getMinutes()}:${future.getSeconds()}`
  ).getTime();
  
  console.log(countDownDate);

  //get days from countdown
  const countdowndays = countDownDate / (1000 * 60 * 60 * 24);
  console.log(countdowndays);

  //get hours from countdown days remainder
  const countdownhours = (countdowndays % 1) * 24;
  console.log(countdownhours);

  //get minutes from countdown hours remainder
  const countdownminutes = (countdownhours % 1) * 60;
  console.log(countdownminutes);

  //get seconds from countdown minutes remainder
  const countdownseconds = (countdownminutes % 1) * 60;
  console.log(countdownseconds);
</script>

<h1>WE'RE LAUNCHING SOON</h1>
<div class="scorecardContainer">
  <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span class="countdown font-mono text-5xl">
        <span style="--value:{$daysStore};" />
      </span>
      days
    </div>
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span class="countdown font-mono text-5xl">
        <span style="--value:{$hoursStore};" />
      </span>
      hours
    </div>
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span class="countdown font-mono text-5xl">
        <span style="--value:{$minutesStore};" />
      </span>
      min
    </div>
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span class="countdown font-mono text-5xl">
        <span style="--value:{$secondsStore};" />
      </span>
      sec
    </div>
  </div>
</div>
<div class="footer">
  <img src="src/assets/pattern-hills.svg" alt="pattern hills" />
</div>


<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  h1 {
    font-family: "Red Hat Display", sans-serif;
    font-weight: 700;
    font-size: 2.5rem;
    color: hsl(0, 0%, 100%);
    text-align: center;
    margin-top: 2rem;
  }
  .scorecard {
    position: relative;
    width: 75px;
  }
  .scorecardContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 2rem;
  }
  .scoreCardText {
    color: white;
    text-align: center;
  }
  .scorecardTextContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 2rem;
    color: white;
    text-align: center;
  }
  .top {
    background-color: rgb(68, 64, 80);
    width: 100%;
    height: 50px;
    border-radius: 5px;
  }

  .bottom {
    background-color: rgb(84, 79, 99);
    width: 100%;
    height: 50px;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .centered-number {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(255, 15, 203);
    font-size: 32px;
    font-weight: 700;
  }

  .footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: scaleY(2.5);
}


</style>
