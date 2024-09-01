import { defineMigration, at, setIfMissing, unset } from 'sanity/migrate';

const from = 'coverImage';
const to = 'mainImage';

export default defineMigration({
  title: 'Replace coverImage with mainImage',
  documentTypes: ['post'],

  migrate: {
    document(doc, context) {
      return [at(to, setIfMissing(doc[from])), at(from, unset())];
    },
  },
});
