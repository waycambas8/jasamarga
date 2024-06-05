DROP TABLE IF EXISTS employee_profile;

CREATE TYPE gender_enum AS ENUM ('Laki-Laki', 'Perempuan');

CREATE TABLE IF NOT EXISTS employee_profile (
  id SERIAL PRIMARY KEY,
  employee_id INTEGER NOT NULL,
  place_of_birth VARCHAR(255),
  date_of_birth DATE,
  gender gender_enum DEFAULT 'Laki-Laki',
  is_married BOOLEAN DEFAULT false,
  prof_pict VARCHAR(255) DEFAULT false,
  created_by VARCHAR(255),
  updated_by VARCHAR(255),
  created_at DATE NOT NULL,
  updated_at DATE NOT NULL
);

CREATE INDEX idx_employee_profile_employee_id ON employee_profile (employee_id);
CREATE INDEX idx_employee_profile_gender ON employee_profile (gender);
CREATE INDEX idx_employee_profile_is_married ON employee_profile (is_married);
