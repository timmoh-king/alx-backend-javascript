/*
 * Create a function named getListStudents that returns an array of objects.
 * Each object should have three attributes:
 * id (Number), firstName (String), and location (String).
 */

export default function getListStudents () {
  return ([
    {
      id: 1,
      firstName: 'Guillaume',
      location: 'San Fransisco'
    },
    {
      id: 2,
      firstName: 'James',
      location: 'Columbia'
    },
    {
      id: 5,
      firstName: 'Serena',
      location: 'San Fransisco'
    }
  ]);
}
