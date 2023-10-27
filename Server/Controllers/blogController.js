const Blog = require('../Models/blogModel.js');

const allblogs = async (req, res, next) => {

  try {
    const data = await Blog.allblogs();
    res.status(200).json({ success: true, data });
  } 
  
  catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Error in getting blogs' });
  }
};



module.exports = {
  allblogs
  
};
