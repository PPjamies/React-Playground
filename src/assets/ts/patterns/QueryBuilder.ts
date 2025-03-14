class QueryBuilder {
    private query: any = {};

    select(fields: string[]) {
        this.query.select = fields;
        return this;
    }

    from(table: String) {
        this.query.table = table;
        return this;
    }

    where(condition: any) {
        this.query.where = condition;
        return this;
    }

    build() {
        return this.query;
    }
}

const query = new QueryBuilder()
    .select(['id', 'name'])
    .from('users')
    .where({state: 'active'})
    .build();