import { compose, withHandlers } from 'vue-compose';
import HellowWorld from './HelloWorld.vue';

const enhance = compose(withHandlers({
  handleUpdateMsg(v) {
    this.$emit('updateMsg', v);
  },
}));

const enhanced = enhance(HellowWorld);

export default enhanced;
