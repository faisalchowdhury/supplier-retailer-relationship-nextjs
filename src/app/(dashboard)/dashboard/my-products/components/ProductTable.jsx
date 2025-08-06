import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@/components/ui/table";

export function ProductTable({ products }) {
  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableCaption>A list of your uploaded products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[100px]">Image</TableHead>
            <TableHead className="min-w-[200px]">Name</TableHead>
            <TableHead className="min-w-[100px]">Category</TableHead>
            <TableHead className="min-w-[80px]">Price</TableHead>
            <TableHead className="min-w-[120px]">Stock</TableHead>
            <TableHead className="min-w-[150px] text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((product) => (
            <TableRow key={product._id}>
              <TableCell>
                <img
                  src={product.image_url}
                  alt={product.product_name}
                  className="h-12 w-12 object-cover rounded"
                />
              </TableCell>
              <TableCell className="font-medium">
                {product.product_name}
              </TableCell>
              <TableCell>{product.product_category}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>{product.stock_quantity}</TableCell>
              <TableCell className="text-right space-x-2">
                <button className="text-sm text-blue-600 hover:underline">
                  Edit
                </button>
                <button className="text-sm text-red-600 hover:underline">
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
