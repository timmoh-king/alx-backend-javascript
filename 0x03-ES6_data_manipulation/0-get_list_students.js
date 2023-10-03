/*
 * Create a function named getListStudents that returns an array of objects.
 * Each object should have three attributes:
 * id (Number), firstName (String), and location (String).
 */

export default function getListStudents() {
  return ([
    { firstName: 'Guillaume', id: 1, location: 'San Fransisco' },
    { firstName: 'James', id: 2, location: 'Columbia' },
    { firstName: 'Serena', id: 5, location: 'San Fransisco' },
  ]);
}
