export default function TeacherProfile({ tutor }) {
  return (
      <>
    <div style={{ padding: '2rem' }}>
      <h1>{tutor.name}</h1>
      <img src={tutor.photo} alt={tutor.name} style={{ width: '200px' }} />
      <p><strong>Qualification:</strong> {tutor.qualification}</p>
      <p><strong>Experience:</strong> {tutor.experience} years</p>
      <p><strong>Subjects:</strong> {tutor.subjects.join(', ')}</p>
      <p><strong>Location:</strong> {tutor.location}</p>
      <p><strong>Hourly Rate:</strong> ₹{tutor.rate}</p>
      <p>{tutor.bio}</p>
    </div>
    
      </>
  );
}
