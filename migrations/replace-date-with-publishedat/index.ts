import { defineMigration, at, setIfMissing, unset } from 'sanity/migrate';

const from = 'date';
const to = 'publishedAt';

export default defineMigration({
  title: 'Replace date with publishedAt',
  documentTypes: ['post'],

  migrate: {
    document(doc, context) {
      return [at(to, setIfMissing(doc[from])), at(from, unset())];
    },
  },
});
