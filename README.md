# Alke Wallet

Proyecto web desarrollado para el módulo de **Fundamentos de Desarrollo Frontend**, que simula una billetera digital llamada **Alke Wallet**.

La aplicación permite a los usuarios iniciar sesión, administrar su saldo y visualizar un historial de transacciones usando tecnologías web básicas.

---

## Tecnologías Utilizadas

* HTML5
* CSS3
* JavaScript
* Bootstrap 5
* LocalStorage (almacenamiento en el navegador)
* Git y GitHub

---

## Estructura del Proyecto

```
alke-wallet/
│
├── login.html
├── menu.html
├── deposit.html
├── sendmoney.html
├── transactions.html
│
├── assets/
│   ├── css/
│   │   └── styles.css
│   │
│   └── js/
│       ├── auth.js
│       ├── wallet.js
│       ├── transactions.js
│       └── main.js
│
└── README.md
```

---

## Funcionalidades Implementadas

### Inicio de Sesión

* Validación de usuario
* Simulación de autenticación
* Uso de LocalStorage
* Redirección automática al menú principal

**Credenciales de prueba:**

Usuario:
admin
```

Contraseña:
1234
```

---

### Menú Principal

Permite al usuario:

* Ver saldo actual
* Depositar dinero
* Enviar dinero
* Ver historial de transacciones
* Cerrar sesión

El saldo se actualiza en tiempo real.

---

### Depósitos

El usuario puede:

* Ingresar un monto
* Validar que sea positivo
* Actualizar el saldo
* Guardar la transacción

---

### Envío de Dinero

El usuario puede:

* Ingresar un monto
* Validar saldo disponible
* Descontar dinero
* Guardar la transacción

---

### Gestión de Contactos

El usuario puede:

* Agregar nuevos contactos
* Guardarlos en LocalStorage
* Utilizarlos mediante autocompletado en futuras transferencias

Los contactos se almacenan de manera persistente en el navegador.

---

### Historial de Transacciones

Se muestra:

* Tipo de operación
* Monto

Las transacciones se almacenan en **LocalStorage** y se cargan dinámicamente.

---

## Uso de LocalStorage

Se almacenan los siguientes datos:

| Clave        | Descripción                          |
| ------------ | ------------------------------------ |
| user         | Usuario logueado                     |
| balance      | Saldo actual                         |
| transactions | Historial de movimientos             |
| contacts     | Lista de contactos guardados         |

---

## Seguridad Implementada

* Validación de usuario
* Protección de páginas sin login
* Control de saldo insuficiente
* Validación de montos inválidos

---

## Diseño

Se utilizó:

* Bootstrap 5
* Tarjetas (cards)
* Navbar
* Formularios
* Tablas

El diseño es responsive y adaptable a dispositivos móviles.

---

## Mejoras de Experiencia de Usuario

* Animaciones suaves al cargar pantallas
* Mensajes dinámicos en formularios
* Validaciones en tiempo real
* Simulación de actualización automática del saldo

---

## ▶ Cómo Ejecutar el Proyecto

1. Descargar o clonar el repositorio:
git clone https://github.com/alelopezv/alke-wallet.git
```

2. Abrir el archivo:
login.html
```
en el navegador.

No se requiere servidor.

---

## Flujo de Navegación

```
Login
  ↓
Menú Principal
  ↓
 ├── Depositar
 ├── Enviar Dinero
 └── Historial
```

---

## 👨‍💻 Autor

Alejandro López

GitHub:

https://github.com/alelopezv

---

## Proyecto Educativo

Este proyecto fue desarrollado con fines educativos para practicar:

* HTML
* CSS
* JavaScript
* Bootstrap
* Git
* GitHub
* Manejo de estados con LocalStorage

---
