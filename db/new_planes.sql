drop table if exists airplanes;

CREATE TABLE airplanes (
  plane_id SERIAL PRIMARY KEY NOT NULL,
  plane_type varchar(40) NOT NULL,
  passenger_count integer NOT NULL
);

INSERT INTO airplanes ( plane_type, passenger_count) VALUES ('747', 200);
INSERT INTO airplanes ( plane_type, passenger_count) VALUES ('717', 10);
INSERT INTO airplanes ( plane_type, passenger_count) VALUES ('727', 20);
INSERT INTO airplanes ( plane_type, passenger_count) VALUES ('737', 30);
INSERT INTO airplanes ( plane_type, passenger_count) VALUES ('757', 500);
