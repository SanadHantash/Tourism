const db = require('../server.js');

const Blog = {};

Blog.allblogs = async () => {
  try {
    const result = await db.query('SELECT users.username,blog.title, blog.image FROM users INNER JOIN blog ON users.id = blog.user_id order by created_at desc ;');
    return result.rows;
  } catch (err) {
    throw err;
  }
};

Blog.createblogs = async () => {
const { title, detail, user_id, image, created_at } = req.body;

try {
  const userExists = await pool.query('SELECT * FROM users WHERE id = $1', [user_id]);

  // Read the image file and convert it to binary data.
  const imageBuffer = fs.readFileSync(imagePath);

  // Hash the image data (if needed, e.g., for security purposes).
  const hashedImageData = await bcrypt.hash(imageBuffer, 10);

  // Insert data into the table.
  const query =
    'INSERT INTO blog (title, detail, user_id, image, created_at) VALUES ($1, $2, $3, $4, $5) RETURNING id';
  const values = [title, detail, user_id, hashedImageData, created_at];

  const result = await pool.query(query, values);
  
}
catch (error) {
  console.error('Error inserting data:', error);
  res.status(500).json({ success: false, error: 'Internal Server Error' });
}
}
module.exports = Blog;