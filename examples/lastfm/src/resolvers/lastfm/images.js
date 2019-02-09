export default {
  Images: {
    small(parentValue) {
      return parentValue.find(img => img.size === 'small')['#text'];
    },
    medium(parentValue) {
      return parentValue.find(img => img.size === 'medium')['#text'];
    },
    large(parentValue) {
      return parentValue.find(img => img.size === 'large')['#text'];
    },
  },
};
