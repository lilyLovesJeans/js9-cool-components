
  //Lesson6.vue
  <template>
    <h2>JavaScript 系列九：第6課 ── 學習用外部狀態管理 vue 元件</h2>
  
    <!-- 登入對話框 -->
    <button class="primary" @click="showLogin = true">登入</button>
    <MyDialog v-model="showLogin">
      <h3>🔑 使用者登入</h3>
      <label>
        帳號：
        <input type="text" placeholder="輸入帳號" />
      </label>
      <br />
      <label>
        密碼：
        <input type="password" placeholder="輸入密碼" />
      </label>
      <div class="actions">
        <button class="secondary" @click="showLogin = false">取消</button>
        <button class="primary" @click="handleLogin">登入</button>
      </div>
    </MyDialog>
  
    <!-- 確認刪除對話框 -->
    <button class="danger" @click="showDelete = true">刪除資料</button>
    <MyDialog v-model="showDelete">
      <h3>⚠️ 確認刪除</h3>
      <p>你確定要刪除這筆資料嗎？此動作無法復原。</p>
      <div class="actions">
        <button class="secondary" @click="showDelete = false">取消</button>
        <button class="danger" @click="confirmDelete">確定刪除</button>
      </div>
    </MyDialog>
  
    <!-- 表單輸入對話框 -->
    <button class="success" @click="showForm = true">新增聯絡人</button>
    <MyDialog v-model="showForm">
      <h3>👤 新增聯絡人</h3>
      <label>
        姓名：
        <input type="text" v-model="newContact.name" />
      </label>
      <br />
      <label>
        電話：
        <input type="text" v-model="newContact.phone" />
      </label>
      <div class="actions">
        <button class="secondary" @click="showForm = false">取消</button>
        <button class="success" @click="saveContact">儲存</button>
      </div>
    </MyDialog>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import MyDialog from './Lesson6_components/MyDialog.vue'
  
  const showLogin = ref(false)
  const showDelete = ref(false)
  const showForm = ref(false)
  
  const newContact = ref({ name: '', phone: '' })
  
  function handleLogin() {
    alert('登入成功！')
    showLogin.value = false
  }
  
  function confirmDelete() {
    alert('資料已刪除！')
    showDelete.value = false
  }
  
  function saveContact() {
    alert(`已新增聯絡人：${newContact.value.name} / ${newContact.value.phone}`)
    newContact.value = { name: '', phone: '' }
    showForm.value = false
  }
  </script>
  
  <style scoped>
  .actions {
    margin-top: 20px;
    text-align: right;
  }
  
  button {
    margin: 4px;
    padding: 6px 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  
  /* 主要動作：登入 / 儲存 */
  button.primary {
    background-color: #1976d2; /* 藍色 */
    color: white;
    border: none;
  }
  
  /* 成功 / 新增 */
  button.success {
    background-color: #28a745; /* 綠色 */
    color: white;
    border: none;
  }
  
  /* 危險 / 刪除 */
  button.danger {
    background-color: #e74c3c; /* 紅色 */
    color: white;
    border: none;
  }
  
  /* 次要 / 取消 */
  button.secondary {
    background-color: #6c757d; /* 灰色 */
    color: white;
    border: none;
  }
  
  h2 {
    color: rgb(149, 44, 95);
  }
  </style>
  
  

  
  