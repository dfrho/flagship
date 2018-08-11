
import { CombinedStore } from '../reducers';
import { connect } from 'react-redux';

export interface CategoryStateProps {
  categories: {
    id: string;
    image?: object;
    handle: string;
    title: string;
    items: object[];
    length: number;
  }[];
}


// provide data (from redux store) to wrapped component as props
function mapStateToProps(
  state: CombinedStore,
  ownProps: any
): CategoryStateProps {
  return {
    categories: state.topCategory.categories
  };
}


export default function withCategory<P>(
  WrappedComponent: React.ComponentClass<P>
): React.ComponentClass<any> {
  return connect(mapStateToProps)(WrappedComponent);
}
