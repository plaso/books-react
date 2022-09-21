function BookItem({ number, title, author, date, awarded, rating, onDelete }) {
  const parsedDate = new Date(date)
  return (
    <tr className={rating >= 8 ? 'table-warning' : ''}>
      <th scope="row">{number}</th>
      <td>{title}</td>
      <td>{parsedDate.getDate()}-{parsedDate.getMonth() + 1}-{parsedDate.getFullYear()}</td>
      <td>{author}</td>
      <td>{awarded ? 'Yes' : 'No'}</td>
      <td>{rating}</td>
      <td><button onClick={onDelete} className="btn btn-danger">Delete</button></td>
    </tr>
  )
}

export default BookItem