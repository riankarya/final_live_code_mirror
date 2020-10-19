# Phase 2 - Live Code Final

## HacktivGarden
Pada LiveCode kali ini kalian akan membuat sebuah website yang dapat menampilkan list plants. Kalian dapat menambahkan plant tersebut ke dalam list menu favorite.

### Summary

- -20 tidak menggunakan sequelize n postgres atau tidak menggunakan project hasil vue cli
- -5 Tidak SPA / Tidak reactive
- -10 push node module
- -5 tidak push package json
- -5 tidak memberikan environtment variables beserta valuenya jika ybs menggunakan env
- -5 using alert()

Silahkan cek contoh demo aplikasi pada link berikut: [hacktiv_garden](https://streamable.com/m32pel)

## Release 0 - Authentication

### Server - Register
- Password di hash menggunakan bcryptjs
- Lakukan register sesuai api-doc.md

### Server - Login
- Generate token menggunakan JWT
- Lakukan login sesuai api-doc.md

### Client - Login & Logout
- jika sudah login, kalau direfresh tidak harus login lagi
- buatlah routing dan views untuk form login
- jika login berhasil maka akan ke routing yang akan menampilkan semua plants yang ada di database(tidak perlu membuat endpoint untuk add plant, cukup melakukan seeding)

NOTES: REGISTER CLIENT TIDAK PERLU ADA


## Release 1 - Fetch Plants 

### Server
- Lakukan Fetch plants sesuai api-doc.md
- data plants bisa di seeding sesuai dengan data json yang di berikan

### Client
- buatlah routing di client untuk menampilkan list plants (contoh : '/')

## Release 2 - Fetch Favorites

### Server
- fetch data favorite milik user yang sedang login
- Lakukan Fetch favorites sesuai api-doc.md

### Client
- buat juga routing untuk menampilkan list favorites (contoh : '/favorites')

## Release 3 - Add To Favorite

### Server
- Lakukan add to favorites sesuai api-doc.md

### Client
- integrasi tombol add to favourite di card plant yang muncul di halaman awal
- pastikan website kalian reaktif (jika berhasil menambah favourite maka list favorite plant user akan bertambah otomatis di client)


## Release 4 - Delete Favorite

### Server
- Melakukan authorization
- Lakukan delete favorites sesuai api-doc.md

### Client
- integrasi tombol delete di list favorites
- pastikan website kalian reaktif (jika berhasil delete favorite maka list favorite plant user akan berkurang tanpa harus di refresh)
