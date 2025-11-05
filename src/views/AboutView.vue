<template>
  <div class="px-6">
    <!-- 
    普通的文字介绍部分
    -->
    <div class="mb-8">
      <div class="text-6xl mb-4">🧑‍💻</div>
      <h2 class="text-4xl font-bold text-gray-800">肖遥 Hunter Xiao</h2>
      <p class="text-xl text-gray-600">
        宁波诺丁汉大学计算机系大三学生，热爱编程与技术，学习成绩十分优异。
      </p>
    </div>

    <!-- 技能展示 -->
    <div class="mb-16">
      <h3>我擅长的</h3>
      <Row align="left">
        <div class="text-center w-12">
          <div class="text-2xl mb-2">📑</div>
          <p class="text-gray-700">学习</p>
        </div>
        <div class="text-center w-12">
          <div class="text-2xl mb-2">💻</div>
          <p class="text-gray-700">编程</p>
        </div>
        <div class="text-center w-12">
          <div class="text-2xl mb-2">🎮</div>
          <p class="text-gray-700">游戏</p>
        </div>
      </Row>
    </div>

    <!-- 照片墙 -->
    <div class="mb-16">
      <h3>照片</h3>
      <Row align="left">
        <img src="https://picsum.photos/300/200?random=1" class="rounded-lg shadow-md w-5/12" />
        <img src="https://picsum.photos/300/200?random=2" class="rounded-lg shadow-md w-5/12" />
      </Row>
    </div>
  </div>
</template>
