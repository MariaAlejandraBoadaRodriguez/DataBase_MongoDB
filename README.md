# MongoDB Champions League Database

Este repositorio contiene el diseño y los datos de una base de datos MongoDB para gestionar un torneo deportivo basado en la Champions League.

## Contenido
- `data/`: Datos de ejemplo para las colecciones.
- `scripts/`: Scripts para insertar y gestionar los datos.
- `schema/`: Esquemas JSON para cada colección.
- `video/`: Video explicativo del proyecto.

## Cómo Usar

### Requisitos Previos

- Tener Node.js instalado.
- Tener una cuenta activa en MongoDB Atlas o un clúster local de MongoDB.
- Instalar la biblioteca mongodb
- git clone https://github.com/MariaAlejandraBoadaRodriguez/DataBase_MongoDB.git

## Ejemplo de Consultas

### Obtener todos los jugadores de un equipo:

- db.players.find({ "team_id": "team123" });

### Consultar los partidos arbitrados por un árbitro específico:

- db.matches.find({ "referee_id": "referee001" });

### Obtener el entrenador de un equipo:

- const team = db.teams.findOne({ "_id": "team123" });
- db.coaches.findOne({ "_id": team.coach_id });

##  Contribuciones

Este proyecto fue desarrollado como parte del curso Bases de Datos Avanzadas. Fue diseñado para practicar y aplicar conceptos de bases de datos NoSQL con MongoDB.

##  Autoría

Equipo de Desarrollo: María Alejandra Rodríguez y otros colaboradores.
Curso: Bases de Datos Avanzadas.
