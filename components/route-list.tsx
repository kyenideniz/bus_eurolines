import { Route } from "@/types";
import ProductCard from "@/components/ui/product-card";
import React from "react";

interface RouteListProps {
    title: string;
    items: Route[];
}

const RouteList: React.FC<RouteListProps> = ({ title, items }) => {
    return ( 
        <div className="space-y-4">
            <h3 className="text-3xl font-bold">{title}</h3>
            {items?.length === 0 && <div>NoResults</div>}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {items.map(item => (
                    <div key={item.id}>
                        <ProductCard key={item.id} data={item} />
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default RouteList;