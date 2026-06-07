declare namespace AddressCompiler {
  interface Item {
    name: string;
    value: string;
  }

  interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
  }

  interface Group {
    name: string;
    items: Item[];
  }
}

declare const AddressCompiler: {
  compile(address: AddressCompiler.Address, groups: AddressCompiler.Group[]): string;
}

export = AddressCompiler;