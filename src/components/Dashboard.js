function Dashboard({userData}) {
    const exerciseList = userData.map(exercise => (
        <div>{exercise.exercise}</div>))
  return (
    <main>
        <h1>Dashboard view</h1>
        {exerciseList}
    </main>
  );
}

export default Dashboard;
