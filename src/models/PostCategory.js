module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        post_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
    },
    {
        tableName: 'posts_categories',
        timestamps: false,
    });

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
        foreignKey: 'post_id',
          as: 'categories',
          otherKey: 'category_id',
          through: PostCategory,
        });
    
        models.Category.belongsToMany(models.BlogPost, {
        foreignKey: 'category_id',
          as: 'blog_posts',
          otherKey: 'post_id',
          through: PostCategory,
        });
      }

      return PostCategory;
}