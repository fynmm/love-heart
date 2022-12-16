<script lang="ts">
  import Layout from "../lib/Layout.svelte";
  import Heart from "../lib/Heart.svelte";
  import Love from "../lib/Love.svelte";

  // 信封
  let imageSrc: string = "/close.jpg";

  // 存放 name 的变量
  let yourName: string = "婷宝";

  // 设置 isDisabled 的值，控制是否展示 Heart
  let isShowLove: string = "";
  // 设置 isShowInput 的值，控制是否展示输入框
  let isShowInput: boolean = true;

  // 当按钮被点击时，将 name 的值赋给 yourName
  function handleClick() {
    console.log("click");
    console.log("yourName:", yourName, "length:", yourName.length);
    // 隐藏输入框并更改图片
    isShowInput = !isShowInput;
    imageSrc = yourName.length > 0 ? "/open.jpg" : "/close.jpg";
    // 等待
    setTimeout(() => {
      // if (yourName.length > 0) {
      //   push("/heart");
      // }
      isShowLove = "love1";
      setTimeout(() => {
        isShowLove = "love2";
      }, 2000);
    }, 1000);
  }
</script>

{#if isShowLove === ""}
  <Layout say={"刚好，这里有一封给你的信"}>
    {#if isShowInput}
      <form class="pl-8 sm:pl-16 transform translate-y-24">
        <label for="name" class="text-xl font-thin">亲爱的：</label>
        <input
          type="text"
          name={yourName}
          id="name"
          disabled
          required
          placeholder="你的名字"
          bind:value={yourName}
          class="border-b bg-gray-100 h-9 p-2 w-32 rounded-md"
        />
      </form>
    {/if}
    <!-- 信封图片 -->
    <img src={imageSrc} alt="Love letter" />

    <div class="text-center pt-6">
      <button
        class="px-8 py-2 bg-pink-300 text-white rounded-lg"
        on:click={handleClick}
      >
        拆开信封
      </button>
    </div>
  </Layout>
{:else if isShowLove === "love1"}
  <Love />
{:else}
  <Layout say={"😍你"}>
    <div class="text-center">
      <Heart name={yourName} />
    </div>
  </Layout>
{/if}
