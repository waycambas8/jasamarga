WITH family_count AS (
    SELECT
        employee_id,
        COUNT(*) FILTER (WHERE relation_status = 'Istri') AS istri_count,
        COUNT(*) FILTER (WHERE relation_status = 'Anak') AS anak_count
    FROM
        employee_family
    GROUP BY
        employee_id
)

SELECT 
    e.id AS employee_id,
    e.nik,
    e.name,
    e.is_active,
    ep.gender,
    DATE_PART('year', AGE(ep.date_of_birth)) AS age,
    ed.name AS school_name,
    ed.level,
    CASE
        WHEN fc.istri_count > 0 AND fc.anak_count > 0 THEN CONCAT(fc.istri_count, ' Istri & ', fc.anak_count, ' Anak')
        WHEN fc.istri_count > 0 THEN CONCAT(fc.istri_count, ' Istri')
        WHEN fc.anak_count > 0 THEN CONCAT(fc.anak_count, ' Anak')
        ELSE NULL
    END AS family_data
FROM 
    employee e
JOIN 
    employee_profile ep ON e.id = ep.employee_id
JOIN 
    education ed ON e.id = ed.employee_id
LEFT JOIN 
    family_count fc ON e.id = fc.employee_id
GROUP BY 
    e.id, e.nik, e.name, e.is_active, ep.gender, ep.date_of_birth, ed.name, ed.level, fc.istri_count, fc.anak_count;