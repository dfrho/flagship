import { CategoryLine } from '@brandingbrand/fscomponents';
import React, { Component } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { CommerceTypes, WithCommerceDataProps } from '@brandingbrand/fscommerce';

import { style as S } from '../styles/Category';
import { UnwrappedCategoryProps } from './Category';

export default class CategoryList extends Component<
  UnwrappedCategoryProps & WithCommerceDataProps<CommerceTypes.Category>
  > {
  // tslint:disable-next-line:cyclomatic-complexity
  render(): React.ReactNode {
    const { listStyle, commerceData, categories } = this.props;

    let commerceCategories;

    if (categories && commerceData && commerceData.categories) {
      commerceCategories = commerceData.categories;
      // tslint:disable-next-line:forin
      for (const index in categories) {
        if (commerceCategories.length) {
          for (const j in commerceCategories) {
            if (commerceCategories[j].id === categories[index].id) {
              commerceCategories[j] = { ...commerceCategories[j], ...categories[index] };
            }
          }
        }
      }
    }

    if (commerceData && commerceData.categories) {

      return (
        <FlatList
          style={[S.list, listStyle]}
          data={commerceCategories || commerceData.categories}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          {...this.props.listViewProps}
        />
      );
    }

    return null;
  }

  private renderItem = ({ item }: ListRenderItemInfo<CommerceTypes.Category>) => {
    const { categoryItemProps, onNavigate, renderCategoryItem } = this.props;

    if (renderCategoryItem) {
      return renderCategoryItem(item);
    }

    return (
      <CategoryLine
        onPress={onNavigate}
        {...item}
        {...categoryItemProps}
      />
    );
  }

  private keyExtractor = (item: CommerceTypes.Category, index: number): string => {
    if (this.props.listViewProps && this.props.listViewProps.keyExtractor) {
      return this.props.listViewProps.keyExtractor(item, index);
    }

    return item.id;
  }
}
