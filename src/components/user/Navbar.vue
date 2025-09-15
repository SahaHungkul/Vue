<script setup>
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar } from "@/components/ui/avatar";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

function logout() {
  userStore.logout();
  router.push("/login");
}
</script>
<script>
export default {
  name: "NavbarUser",
};
</script>

<template>
  <header class="flex items-center justify-between h-14 bg-white border-b px-4">
    <!-- Logo / Brand -->
    <h1 class="text-lg font-semibold">Event Management</h1>

    <!-- Navigation -->
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <RouterLink to="/" class="px-3 py-2">Home</RouterLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <RouterLink to="/bookings" class="px-3 py-2">My Bookings</RouterLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <RouterLink to="/profile" class="px-3 py-2">Profile</RouterLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <!-- Profile Dropdown -->
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Avatar class="w-8 h-8 cursor-pointer">
          <img src="../../assets/hoshino.jpg" alt="User Avatar" />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <RouterLink to="/profile">Profile</RouterLink>
        </DropdownMenuItem>
        <DropdownMenuItem @click="logout">Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </header>
</template>
