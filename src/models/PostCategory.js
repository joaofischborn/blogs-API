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
        tableName: 'post_categories',
        timestamps: false,
    });

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
        foreignKey: 'post_id',
          as: 'post_id',
          otherKey: 'category_id',
          through: PostCategory,
        });
    
        models.Category.belongsToMany(models.BlogPost, {
        foreignKey: 'category_id',
          as: 'category_id',
          otherKey: 'post_id',
          through: PostCategory,
        });
      }

      return PostCategory;
}