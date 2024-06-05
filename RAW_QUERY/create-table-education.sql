DROP TABLE IF EXISTS education;

CREATE TYPE education_level_enum AS ENUM ('TK', 'SD', 'SMP', 'SMA', 'Strata 1', 'Strata 2', 'Doktor', 'Profesor');

CREATE TABLE IF NOT EXISTS education (
  id SERIAL PRIMARY KEY,
  employee_id INTEGER NOT NULL,
  name VARCHAR(255),
  level education_level_enum DEFAULT 'SMA',
  description VARCHAR(255) NOT NULL,
  created_by VARCHAR(255),
  updated_by VARCHAR(255),
  created_at DATE NOT NULL,
  updated_at DATE NOT NULL
);

CREATE INDEX idx_education_employee_id ON education (employee_id);
CREATE INDEX idx_education_name ON education (name);
CREATE INDEX idx_education_level ON education (level);
