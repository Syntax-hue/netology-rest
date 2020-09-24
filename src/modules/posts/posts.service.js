const pool = require('../../db');

module.exports = {
    async getAll() {
        try {
            const posts = await pool.query('SELECT * FROM posts');
            if (!posts.rows) return { msg: 'not found' };

            return posts.rows;
        } catch (e) {
            console.error(e.message || e);
        }
    },

    async getOne(id) {
        try {
            const post = await pool.query('SELECT * FROM posts WHERE post_id = $1', [id])
            if (!post.rows.length) return { msg: 'not found' };

            return post.rows;
        } catch (e) {
            console.error(e.message)
        }
    },

    async create(post_body) {
        try {
            const newPost = await pool.query("INSERT INTO posts (post_body) VALUES($1) RETURNING *", [post_body]);
            return newPost.rows;
        } catch (e) {
            console.error(e.message)
        }
    },

    async update(id, post_update) {
        try {
            await pool.query('UPDATE posts SET post_body = $1 WHERE post_id = $2 RETURNING *',
                [post_update, id]);
            return 'Post was updated';
        } catch (e) {
            console.error(e.message);
        }
    },

    async delete(id) {
        const post = await pool.query('SELECT * FROM posts WHERE post_id = $1', [id]);
        if (!post.rows.length) return { msg: 'not found' };

        await pool.query("DELETE FROM posts WHERE post_id = $1", [id]);
        return 'Post successfully deleted';

    }
}
