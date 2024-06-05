# Prueba - Acceso a datos en aplicaciones Node

En esta prueba se hace lo sgte.:
-Conectar a una base de datos PostgreSQL con Node
-Realizar consultas DML con Node y el paquete pg
-Realizar consultas TCL con Node y el paquete pg
-Construir una API RESTful utilizando PostgreSQL para la persistencia de datos
-Manejar errores y códigos de estado HTTP

## Descripción del proyecto

Prueba de Desafío LATAM, que solicita los sgtes. requerimientos:

-Desarrollo de un nuevo sistema de transferencias para el banco Solar, levantando servidor con Node conectado a PostgreSQL para la gestión y persistencia de datos
-Simulación de un sistema de transferencias que permita:
-Registrar nuevos usuarios con un balance inicial
-Realizar transferencias de saldos entre ellos

Las rutas que a crear son las siguientes:
● /GET: Devuelve la aplicación cliente disponible en el apoyo de la prueba.
● /usuario POST: Recibe los datos de un nuevo usuario y los almacena en PostgreSQL.
● /usuarios GET: Devuelve todos los usuarios registrados con sus balances.
● /usuario PUT: Recibe los datos modificados de un usuario registrado y los actualiza.
● /usuario DELETE: Recibe el id de un usuario registrado y lo elimina .
● /transferencia POST: Recibe los datos para realizar una nueva transferencia. Se debe
ocupar una transacción SQL en la consulta a la base de datos.
● /transferencias GET: Devuelve todas las transferencias almacenadas en la base de
datos en formato de arreglo.



Realizado por: Norma Isabel Rojas 🌞