#!/usr/bin/env ruby

input_files = Dir.glob('*.html').sort.map { |s| s[0..1] }

raise 'You\'re probably not in the right directory' unless input_files.count > 5

output_file = File.open('../pages.js', 'w')

input_files.each do |f|
  lines = File.readlines("#{f}.html").map(&:chomp).join("\\\n")
  output_file.puts "var page_#{f} = \"#{lines}\";"
  output_file.puts
end

output_file.puts 'var pages = ['
input_files.each do |f|
  output_file.puts "    page_#{f},"
end
output_file.puts '];'
