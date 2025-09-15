<script setup>
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Users, ShoppingCart, DollarSign, BarChart3 } from "lucide-vue-next"
</script>

<template>
  <div class="p-6 space-y-6">
    <h1 class="text-2xl font-bold">Admin Dashboard</h1>

    <!-- Statistik -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader class="flex flex-row items-center justify-between">
          <CardTitle>Total Users</CardTitle>
          <Users class="w-5 h-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <p class="text-2xl font-bold">1,240</p>
          <p class="text-sm text-muted-foreground">+120 bulan ini</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="flex flex-row items-center justify-between">
          <CardTitle>Orders</CardTitle>
          <ShoppingCart class="w-5 h-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <p class="text-2xl font-bold">320</p>
          <p class="text-sm text-muted-foreground">+30 minggu ini</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="flex flex-row items-center justify-between">
          <CardTitle>Revenue</CardTitle>
          <DollarSign class="w-5 h-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <p class="text-2xl font-bold">$12,430</p>
          <p class="text-sm text-muted-foreground">+5% dibanding bulan lalu</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="flex flex-row items-center justify-between">
          <CardTitle>Analytics</CardTitle>
          <BarChart3 class="w-5 h-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <p class="text-2xl font-bold">98%</p>
          <p class="text-sm text-muted-foreground">Sistem stabil</p>
        </CardContent>
      </Card>
    </div>

    <!-- Tabel contoh -->
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Latest Users</CardTitle>
        </CardHeader>
        <CardContent>
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b">
                <th class="py-2">Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="py-2">John Doe</td>
                <td>john@example.com</td>
                <td>Admin</td>
              </tr>
              <tr class="border-b">
                <td class="py-2">Jane Smith</td>
                <td>jane@example.com</td>
                <td>User</td>
              </tr>
              <tr>
                <td class="py-2">Michael</td>
                <td>michael@example.com</td>
                <td>Kasir</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
