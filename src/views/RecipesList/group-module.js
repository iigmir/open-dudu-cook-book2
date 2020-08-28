import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters( "RecipeFlag", [
            "sorted_tag_getter",
            "sorted_type_getter"
        ]),
        ...mapGetters( "Recipes", [
            "default_list_getter",
        ]),
        other_label() {
            return "其它";
        },
        dishes_not_in_any_group() {
            const tag = this.sorted_tag_getter;
            const labels = this.group_labels_from_module;
            const lists = this.default_list_getter;
            const result = lists.filter( the => labels.includes( the[tag] ) === false );
            if( result.length > 0 ) {
                console.warn( "There're some dishes that do not belong in any group." );
            }
            return result;
        },
        type_is_not_group() {
            const { sorted_type_getter, sorted_tag_getter } = this;
            return sorted_type_getter !== "Group" || sorted_tag_getter === "";
        },
        group_labels_from_module() {
            if( this.type_is_not_group ) {
                return [];
            }
            const { default_list_getter, sorted_tag_getter, other_label } = this;
            const unique_set = new Set(
                default_list_getter
                    .map( it => it[sorted_tag_getter] )
                    .filter( txt => txt.length > 0 )
            );
            const result = [...unique_set];
            if( !result.some( txt => txt === other_label ) ) {
                result.push(other_label);
            }
            return result;
        },
        group_children_list_from_module() {
            const result = {};
            if( this.type_is_not_group ) {
                return result;
            }
            const { default_list_getter, group_labels_from_module, other_label, dishes_not_in_any_group } = this;
            const tag = this.sorted_tag_getter;
            const no_group_children = dishes_not_in_any_group;
            group_labels_from_module.forEach( name => {
                result[ name ] = default_list_getter.filter( it => it[tag] === name );
            });
            if( no_group_children.length > 0 ) {
                result[other_label] = result[other_label].concat(no_group_children);
            }
            return result;
        },
        group_final_list() {
            if( this.type_is_not_group ) {
                return [];
            }
            return this.group_labels_from_module.map(
                name => ({ name, child: this.group_children_list_from_module[name] })
            );
        }
    }
};
