DROP TABLE IF EXISTS employee_family;

CREATE TYPE religion_enum AS ENUM ('Islam', 'Katolik', 'Budha', 'Protestas', 'Konghucu');

CREATE TYPE relation_status_enum AS ENUM ('Suami', 'Istri', 'Anak', 'Anak Sambung');

CREATE TABLE IF NOT EXISTS employee_family (
  id SERIAL PRIMARY KEY,
  employee_id INTEGER NOT NULL,
  name VARCHAR(255),
  identifier VARCHAR(255),
  job VARCHAR(255),
  place_of_birth VARCHAR(255),
  date_of_birth DATE,
  religion religion_enum DEFAULT 'Islam' NOT NULL,
  is_life BOOLEAN DEFAULT true,
  is_divorced BOOLEAN DEFAULT false,
  relation_status relation_status_enum DEFAULT 'Suami' NOT NULL,
  created_by VARCHAR(255),
  updated_by VARCHAR(255),
  created_at DATE NOT NULL,
  updated_at DATE NOT NULL
);

CREATE INDEX idx_employee_family_employee_id ON employee_family (employee_id);
CREATE INDEX idx_employee_family_name ON employee_family (name);
CREATE INDEX idx_employee_family_identifier ON employee_family (identifier);
CREATE INDEX idx_employee_family_religion ON employee_family (religion);
CREATE INDEX idx_employee_family_is_life ON employee_family (is_life);
CREATE INDEX idx_employee_family_relation_status ON employee_family (relation_status);
