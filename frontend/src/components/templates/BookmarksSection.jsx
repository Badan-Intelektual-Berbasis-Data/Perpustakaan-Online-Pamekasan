import React from "react";
import Card from "../atoms/Card";

export default function BookmarksSection() {
  return (
    <div className="flex-1 px-24">
      <h1 className="text-2xl text-medium">Bookmark</h1>
      <div className="grid grid-cols-4 gap-x-8 gap-y-12 mt-12">
        <Card author="Alvin Setya Pranata" desc="Hello" image="" />
        <Card author="Alvin Setya Pranata" desc="Hello" image="" />
        <Card author="Alvin Setya Pranata" desc="Hello" image="" />
        <Card author="Alvin Setya Pranata" desc="Hello" image="" />
        <Card author="Alvin Setya Pranata" desc="Hello" image="" />
        <Card author="Alvin Setya Pranata" desc="Hello" image="" />
      </div>
    </div>
  );
}
