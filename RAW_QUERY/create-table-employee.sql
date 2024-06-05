DROP TABLE IF EXISTS employee;

CREATE TYPE status_enum AS ENUM ('true', 'false');

CREATE TABLE IF NOT EXISTS employee (
  id SERIAL PRIMARY KEY,
  nik VARCHAR(255),
  name VARCHAR(255),
  is_active BOOLEAN DEFAULT true,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  created_by VARCHAR(255),
  updated_by VARCHAR(255),
  created_at DATE NOT NULL,
  updated_at DATE NOT NULL
);

CREATE INDEX idx_employee_nik ON employee (nik);
CREATE INDEX idx_employee_name ON employee (name);
CREATE INDEX idx_employee_start_date ON employee (start_date);
CREATE INDEX idx_employee_end_date ON employee (end_date);
