<template>
    <nav>
      <ul>
        <li><router-link to="/lesson1">第1課</router-link></li>
        <li><router-link to="/lesson2">第2課</router-link></li>
        <li><router-link to="/lesson3">第3課</router-link></li>
        <li><router-link to="/lesson4">第4課</router-link></li>
        <li><router-link to="/lesson5">第5課</router-link></li>
        <li><router-link to="/lesson6">第6課</router-link></li>
        <li><router-link to="/lesson7">第7課</router-link></li>
      </ul>
    </nav>
</template>
  
<style scoped>
nav {
  background: linear-gradient(to right, #e0f7fa, #fff);
  padding: 1rem;
  border-bottom: 2px solid #ccc;
}

ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  padding: 0;
  margin: 0;
}

li {
  margin: 0;
}

a {
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;
}

a:hover {
  background-color: #d0f0ff;
  color: #007acc;
}

a.router-link-exact-active {
  background-color: #007acc;
  color: #fff;
  font-weight: bold;
}
</style>

  