<template>
  <div @click="outsideClick" :class="sidebarStatus ? 'sidebar-open' : 'sidebar-closed'">
    <transition name="slide">
      <section v-show="sidebarStatus">
        <img id="logo" src="../../assets/brand.svg" alt="PEG Contas Logo" />

        <nav>
          <router-link
            v-for="(option, index) in sidebarOptions"
            :key="index"
            :to="option.routerPath"
          >
            <img :src="option.imgPath" />
            <span class="light-grey">{{option.name}}</span>
          </router-link>
        </nav>
      </section>
    </transition>
    <HamburguerMenu />
  </div>
</template>

<script>
import HamburguerMenu from "./NavigationSidebarComponents/HambuerguerMenu.vue";

export default {
  name: "NavigationSidebar",
  components: {
    HamburguerMenu,
  },
  data() {
    return {
      sidebarOptions: {
        activities: {
          name: "Minhas atividades",
          routerPath: "/activities",
          imgPath: require("../../assets/activities.svg"),
        },
        accounts: {
          name: "Todas as contas",
          routerPath: "/accounts",
          imgPath: require("../../assets/accounts.svg"),
        },
        user: {
          name: "Usuários",
          routerPath: "/user",
          imgPath: require("../../assets/user.svg"),
        },
        performance: {
          name: "Desempenho",
          routerPath: "/performance",
          imgPath: require("../../assets/performance.svg"),
        },
        dashboard: {
          name: "Dashboard",
          routerPath: "/dashboard",
          imgPath: require("../../assets/dashboard.svg"),
        },
      },
    };
  },
  computed: {
    sidebarStatus() {
      return this.$store.state.sidebarStatus;
    },
  },
  methods: {
    toggleSidebar() {
      this.$store.commit("CHANGE_SIDEBAR_STATUS");
    },
    outsideClick({ currentTarget, target }) {
      if (currentTarget === target && this.sidebarStatus === true) {
        this.toggleSidebar();
      }
    },
  },
  watch: {
    $route() {
      if (this.sidebarStatus === true) this.toggleSidebar();
    },
  },
};
</script>

<style scoped>
.sidebar-closed {
  position: fixed;
  top: 0;
  left: 0;
}

.sidebar-open {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  animation: bgFade 0.3s;
}

section {
  height: 100%;
  width: 8rem;
  background-color: #e7ebf7;
  position: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#logo {
  width: 100%;
}

nav {
  text-align: center;
  width: 100%;
}

a,
button {
  margin-top: 1.5rem;
}

a {
  display: flex;
  flex-direction: column;
  align-items: center;
}

a:hover,
.router-link-active {
  border-left: 4px solid #2793ff;
  color: #2793ff;
}

.router-link-active span {
  color: #2793ff;
}

span {
  width: 6rem;
}

/* Animations */
.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s;
}

.slide-enter-to {
  animation: slideAnim 0.3s;
}

.slide-leave-to {
  animation: slideAnim 0.3s reverse;
}

@keyframes slideAnim {
  from {
    transform: translate3d(-40px, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bgFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>