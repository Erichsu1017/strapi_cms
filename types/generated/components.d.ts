import type { Schema, Struct } from '@strapi/strapi';

export interface ContentTypeAType extends Struct.ComponentSchema {
  collectionName: 'components_content_type_a_types';
  info: {
    description: '';
    displayName: 'AType';
    icon: 'alien';
  };
  attributes: {
    ProductContent: Schema.Attribute.RichText;
    Title_Aqua: Schema.Attribute.String & Schema.Attribute.Required;
    Title_White: Schema.Attribute.String;
  };
}

export interface ContentTypeBType extends Struct.ComponentSchema {
  collectionName: 'components_content_type_b_types';
  info: {
    description: '';
    displayName: 'BType';
    icon: 'apps';
  };
  attributes: {
    ProductContent1: Schema.Attribute.RichText;
    ProductContent2: Schema.Attribute.RichText;
    Title_Aqua: Schema.Attribute.String & Schema.Attribute.Required;
    Title_White: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content-type.a-type': ContentTypeAType;
      'content-type.b-type': ContentTypeBType;
    }
  }
}
